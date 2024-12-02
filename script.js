document.addEventListener('DOMContentLoaded', function() {
    const helpButton = document.getElementById('helpButton');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const techSupportButton = document.getElementById('techSupportButton');
    const salesSupportButton = document.getElementById('salesSupportButton');
    const chatForm = document.getElementById('chatForm');
    const chatWindow = document.getElementById('chatWindow');
    const sendInitialMessageButton = document.getElementById('sendInitialMessageButton');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const backButton = document.getElementById('backButton');

    helpButton.onclick = function() {
        modal.style.display = "block";
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    backButton.onclick = function() {
        chatForm.style.display = "none";
        chatWindow.style.display = "none";
        document.getElementById('supportOptions').style.display = "block";
    }

    techSupportButton.onclick = function() {
        chatForm.style.display = "block";
        chatWindow.style.display = "block";
        document.getElementById('supportOptions').style.display = "none";
    }

    sendInitialMessageButton.onclick = function() {
        chatForm.style.display = "none";
    }

    // sendInitialMessageButton.onclick = function() {
    //     const message = messageInput.value;
    //     if (message) {
    //         // Здесь будет отправка по SignalR
    //         chatHub.invoke('SendMessage', message).catch(function (err) {
    //             return console.error(err.toString());
    //         });
    //         messageInput.value = '';
    //     }
    // }

//    window.onclick = function(event) {
//        if (event.target == modal) {
//            modal.style.display = "none";
//        }
//    }

    // Предварительная инициализация SignalR
    // const connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

    // connection.on("ReceiveMessage", function(message) {
    //     const messageElement = document.createElement('div');
    //     messageElement.textContent = message;
    //     chatMessages.appendChild(messageElement);
    // });

    // connection.start().then(function() {
    //     console.log('SignalR connected');
    // }).catch(function (err) {
    //     return console.error(err.toString());
    // });
});