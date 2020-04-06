"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewUtil = (function () {
    function ViewUtil() {
    }
    ViewUtil.FindId = function (id, view) {
        for (var inx = 0; inx < view.nodes.length; ++inx) {
            var node = view.nodes[inx];
            if (node.id == id) {
                return node;
            }
        }
        return undefined;
    };
    return ViewUtil;
}());
exports.ViewUtil = ViewUtil;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFxQkE7SUFBQTtJQVdBLENBQUM7SUFWUSxlQUFNLEdBQWIsVUFBYyxFQUFVLEVBQUUsSUFBVTtRQUNsQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUM7WUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMxQixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFDO2dCQUNoQixPQUFPLElBQUksQ0FBQTthQUNaO1NBQ0Y7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksNEJBQVE7QUFhckIsSUFBSSxFQUFFLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QztJQUFBO0lBZUEsQ0FBQztJQWRRLGtCQUFNLEdBQWI7UUFDRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sb0JBQVEsR0FBZixVQUFnQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ3ZCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBQztZQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDekI7U0FDRjtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNeUV2ZW50IH0gZnJvbSBcIi4vTXlFdmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaWV3e1xyXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgbm9kZXM6IE5vZGVbXTtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRhcENhbGxiYWNrPzogKGV2ZW50OiBNeUV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vZGV7XHJcbiAgdHlwZTogbnVtYmVyO1xyXG4gIHNyYz86IHN0cmluZztcclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIHZpZXc/OiBWaWV3O1xyXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmc7XHJcbiAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0YXBDYWxsYmFjaz86IChldmVudDogTXlFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdVdGlsIHtcclxuICBzdGF0aWMgRmluZElkKGlkOiBzdHJpbmcsIHZpZXc6IFZpZXcpOiBOb2RlfHVuZGVmaW5lZHtcclxuICAgIGZvciAodmFyIGlueCA9IDA7IGlueCA8IHZpZXcubm9kZXMubGVuZ3RoOyArK2lueCl7XHJcbiAgICAgIHZhciBub2RlID0gdmlldy5ub2Rlc1tpbnhdXHJcbiAgICAgIGlmIChub2RlLmlkID09IGlkKXtcclxuICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbnZhciBpZDogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbmV4cG9ydCBjbGFzcyBJZEdlbmVyYXRvcntcclxuICBzdGF0aWMgTmV4dElkKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiAoaWQrKykudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBVcGRhdGVJZCh2aWV3OiBWaWV3KXtcclxuICAgIHZpZXcuaWQgPSB0aGlzLk5leHRJZCgpXHJcbiAgICBmb3IgKHZhciBpbnggPSAwOyBpbnggPCB2aWV3Lm5vZGVzLmxlbmd0aDsgKytpbngpe1xyXG4gICAgICB2YXIgbm9kZSA9IHZpZXcubm9kZXNbaW54XVxyXG4gICAgICBub2RlLmlkID0gdGhpcy5OZXh0SWQoKVxyXG4gICAgICBpZiAobm9kZS50eXBlID09IDAgJiYgbm9kZS52aWV3KXtcclxuICAgICAgICB0aGlzLlVwZGF0ZUlkKG5vZGUudmlldylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==