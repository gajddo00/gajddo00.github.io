import { LoginHistoryFilter } from './../api/api';
import { ServiceType, AuthMethod } from '../api/api';

export const mapServiceType = (index: number): ServiceType => {
    const value = parseInt(index.toString());
    switch (value) {
        case 0: return ServiceType.Website;
        case 1: return ServiceType.Mobile;
        case 2: return ServiceType.Desktop;
    }

    return ServiceType.Website;
}

export const mapAuthMethod = (index: number): AuthMethod => {
    const value = parseInt(index.toString());
    switch (value) {
        case 0: return AuthMethod.Password;
        case 1: return AuthMethod.Email;
        case 2: return AuthMethod.Mobile;
    }

    return AuthMethod.Password;
}

export const mapLoginHistoryFilter = (index: number): LoginHistoryFilter => {
    const value = parseInt(index.toString());
    switch (value) {
        case 0: return LoginHistoryFilter.All;
        case 1: return LoginHistoryFilter.OnlyMe;
    }

    return LoginHistoryFilter.All;
}