function notify(message) {
    alert(message);
}

function shout(shoutmessage){
    console.log(shoutmessage)
}



export default {
    notify: notify,
    shout: shout
}