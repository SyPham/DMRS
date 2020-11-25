import * as signalR from '@microsoft/signalr';
import { environment } from '../../environments/environment';

export const CONNECTION_HUB = new signalR.HubConnectionBuilder()
    .withUrl(environment.hub)
    // .configureLogging(signalR.LogLevel.Information)
    .build();
// Start the connection.
start();
function start() {
    CONNECTION_HUB.start().then(function () {
        CONNECTION_HUB.on('UserConnected', (conId) => {
            console.log("UserConnected", conId);

        });
        CONNECTION_HUB.on('UserDisconnected', (conId) => {
            console.log("UserDisconnected", conId);

        });

        console.log("Signalr connected");
    }).catch(function (err) {
        setTimeout(() => start(), 5000);
    });
}

export const SCALING_CONNECTION_HUB = new signalR.HubConnectionBuilder()
    .withUrl(environment.scalingHub)
    // .configureLogging(signalR.LogLevel.Information)
    .build();
// Start the connection.
function startScalingHub() {
    SCALING_CONNECTION_HUB.start().then(function () {
        SCALING_CONNECTION_HUB.on('Scaling Hub UserConnected', (conId) => {
            console.log("Scaling Hub UserConnected", conId);

        });
        SCALING_CONNECTION_HUB.on('Scaling Hub User Disconnected', (conId) => {
            console.log("Scaling Hub User Disconnected", conId);

        });

        console.log("Scaling Hub Signalr connected");
    }).catch(function (err) {
        setTimeout(() => startScalingHub(), 5000);
    });
}
startScalingHub();


