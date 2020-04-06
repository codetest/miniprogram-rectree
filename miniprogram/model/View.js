"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id = new Date().getTime();
var IdGenerator = (function () {
    function IdGenerator() {
    }
    IdGenerator.NextId = function () {
        return (id++).toString();
    };
    IdGenerator.UpdateId = function (view) {
        view.id = this.NextId();
        for (var inx = 0; inx < view.nodes.length; ++inx) {
            var node = view.nodes[inx];
            node.id = this.NextId();
            if (node.type == 0 && node.view) {
                this.UpdateId(node.view);
            }
        }
    };
    return IdGenerator;
}());
exports.IdGenerator = IdGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQSxJQUFJLEVBQUUsR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RDO0lBQUE7SUFlQSxDQUFDO0lBZFEsa0JBQU0sR0FBYjtRQUNFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxvQkFBUSxHQUFmLFVBQWdCLElBQVU7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDdkIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFDO1lBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUN6QjtTQUNGO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVmlld3tcclxuICBub2RlczogTm9kZVtdO1xyXG4gIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9kZXtcclxuICB0eXBlOiBudW1iZXI7XHJcbiAgc3JjPzogc3RyaW5nO1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgdmlldz86IFZpZXc7XHJcbiAgaWQ6IHN0cmluZztcclxufVxyXG5cclxudmFyIGlkOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuZXhwb3J0IGNsYXNzIElkR2VuZXJhdG9ye1xyXG4gIHN0YXRpYyBOZXh0SWQoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIChpZCsrKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIFVwZGF0ZUlkKHZpZXc6IFZpZXcpe1xyXG4gICAgdmlldy5pZCA9IHRoaXMuTmV4dElkKClcclxuICAgIGZvciAodmFyIGlueCA9IDA7IGlueCA8IHZpZXcubm9kZXMubGVuZ3RoOyArK2lueCl7XHJcbiAgICAgIHZhciBub2RlID0gdmlldy5ub2Rlc1tpbnhdXHJcbiAgICAgIG5vZGUuaWQgPSB0aGlzLk5leHRJZCgpXHJcbiAgICAgIGlmIChub2RlLnR5cGUgPT0gMCAmJiBub2RlLnZpZXcpe1xyXG4gICAgICAgIHRoaXMuVXBkYXRlSWQobm9kZS52aWV3KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19