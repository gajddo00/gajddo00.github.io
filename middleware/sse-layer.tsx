import { useEffect } from "react";
import useAuthState from "../hooks/useAuthState";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { BroadcastChannel } from 'broadcast-channel';
import { v4 as uuidv4 } from 'uuid';
import useAuthorization from "../hooks/useAuthorization";
import { RedirectDto } from "../api";

type SSELayerProps = {
    children: JSX.Element
}

const SSELayer = ({ children }: SSELayerProps) => {
    const { auth } = useAuthState();
    const authorize = useAuthorization();
    const channel = new BroadcastChannel('logout-channel', {
        webWorkerSupport: false
    });

    const handleLogoutEvent = async () => {
        const redirectData: RedirectDto = await authorize();
        if (redirectData.redirectUrl) {
            window.location.assign(redirectData.redirectUrl);
        }
    }

    useEffect(() => {
        channel.onmessage = async event => {
            switch (event.event) {
                case 'LOGOUT':
                    await handleLogoutEvent();
                    break;
            }
        }
    }, [])

    useEffect(() => {
        const controller = new AbortController();
        let subId = localStorage.getItem('subId');

        if (!subId) {
            subId = uuidv4();
            localStorage.setItem('subId', subId ?? "");
        }

        const subscribeKey = `${subId}_${process.env.NEXT_PUBLIC_APP_ID}`;

        const subscribe = async () => {
            console.log("SUBSCRIBING WITH: " + subscribeKey)

            await fetchEventSource(process.env.NEXT_PUBLIC_API_BASE_URL + '/notifications/' + subscribeKey, {
                onmessage(event) {
                    channel.postMessage(event);
                },
                onerror(err) {
                    controller.abort();
                },
                method: 'GET',
                signal: controller.signal,
                headers: {
                    'Authorization': 'Bearer ' + auth?.token,
                },
            });
        }

        subscribe();

        return () => {
            controller.abort();
        };
    }, [auth])

    return children;
}

export default SSELayer;
