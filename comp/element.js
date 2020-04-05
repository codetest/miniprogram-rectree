// comp/Element.js
Component({
  /**
   * Component properties
   */
  properties: {
    nodes: {
      type: Array
    }
  },

  /**
   * Component initial data
   */
  data: {
  },

  /**
   * Component methods
   */
  attached() {
    console.log(this.data)
  }
})
