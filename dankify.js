$('*')
  .contents()
  .filter(function() {
    return this.nodeType === 3; 
  }).wrap("<marquee></marquee>");