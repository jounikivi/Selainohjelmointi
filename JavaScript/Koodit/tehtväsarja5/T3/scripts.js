const initilizApplication = () => {
  
  let addbutton = document.getElementById('click', () => {
    
    let newMessage = document.getElementById('newmessage').value;
    let newPm, newTN

    if(newMessage && newMessage.lengy > 0) {

      newPm = document.createElement('p');
      newTN = document.createTextNode('newMessage');
      newPm.appendChild(newTN);
      let allMessages = document.getElementById('messages')
      allMessages.appendChild(newPm)
      document.getElementById('newMessage').value
      ;
    }
  })
}
window.addEventListener('load', () => {
  initilizApplication();
})
