import {View} from "../model/View";
Component({
    properties: {
        view: Object
    },
    lifetimes: {
        attached: function() {
            var localView: View = <View>this.data.view
            console.log("component attached ", localView.id)
        },
        created: function() {
        }
    }
})
