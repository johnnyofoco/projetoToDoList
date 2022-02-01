const Main = {
  
  init: function () {
    this.cacheSelectors()
    this.bindEvents()
  },
  
  cacheSelectors: function () {
    this.checkButtons = document.querySelectorAll('.check')
  },

  bindEvents: function () {
    const self = this

    this.checkButtons.forEach(function(button) {
      button.onclick = self.Events.checkButton_click
    })
  },

  Events: {
    checkButton_click: function () {
      alert('ok')
    }
  }

}

Main.init()