AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
     
      
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
     
      
    });
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    
    

    // Handling Click Events
    
    

    
    
  },

  handleMarkerLost: function() {
    // Changing button div visibility
   
    
  }
});
