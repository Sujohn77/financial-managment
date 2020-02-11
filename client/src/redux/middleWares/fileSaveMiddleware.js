export const fileSaveMiddleWare = store => next => action => {
  let result = next(action);
  let userState = store.getState().user;
  let profile = store.getState().profile;
  if (userState.users){

    if(userState.users.length){
      localStorage.setItem("user",JSON.stringify(userState));
    }

    if(profile && profile.currentCategory != null){

      localStorage.setItem("profile-"+userState.currentUser,JSON.stringify(profile));
    }
  }
//   download("appMemory.json", JSON.stringify(store.getState()));
  return result;
};

// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);
  
//     element.style.display = 'none';
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
//   }