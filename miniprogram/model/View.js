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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFpQkEsSUFBSSxFQUFFLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QztJQUFBO0lBZUEsQ0FBQztJQWRRLGtCQUFNLEdBQWI7UUFDRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sb0JBQVEsR0FBZixVQUFnQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ3ZCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBQztZQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDekI7U0FDRjtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFZpZXd7XHJcbiAgY2xhc3NOYW1lcz86IHN0cmluZztcclxuICBzdHlsZT86IHN0cmluZztcclxuICBub2RlczogTm9kZVtdO1xyXG4gIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9kZXtcclxuICB0eXBlOiBudW1iZXI7XHJcbiAgc3JjPzogc3RyaW5nO1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgdmlldz86IFZpZXc7XHJcbiAgY2xhc3NOYW1lcz86IHN0cmluZztcclxuICBzdHlsZT86IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG59XHJcblxyXG52YXIgaWQ6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5leHBvcnQgY2xhc3MgSWRHZW5lcmF0b3J7XHJcbiAgc3RhdGljIE5leHRJZCgpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gKGlkKyspLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgVXBkYXRlSWQodmlldzogVmlldyl7XHJcbiAgICB2aWV3LmlkID0gdGhpcy5OZXh0SWQoKVxyXG4gICAgZm9yICh2YXIgaW54ID0gMDsgaW54IDwgdmlldy5ub2Rlcy5sZW5ndGg7ICsraW54KXtcclxuICAgICAgdmFyIG5vZGUgPSB2aWV3Lm5vZGVzW2lueF1cclxuICAgICAgbm9kZS5pZCA9IHRoaXMuTmV4dElkKClcclxuICAgICAgaWYgKG5vZGUudHlwZSA9PSAwICYmIG5vZGUudmlldyl7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVJZChub2RlLnZpZXcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0=