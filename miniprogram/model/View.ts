import { MyEvent } from "./MyEvent";

export interface View{
  classNames?: string;
  style?: string;
  nodes: Node[];
  id: string;
  tapCallback?: (event: MyEvent) => void;
}

export interface Node{
  type: number;
  src?: string;
  text?: string;
  view?: View;
  classNames?: string;
  style?: string;
  id: string;
  tapCallback?: (event: MyEvent) => void;
}

export class ViewUtil {
  static FindId(id: string, view: View): Node|undefined{
    for (var inx = 0; inx < view.nodes.length; ++inx){
      var node = view.nodes[inx]
      if (node.id == id){
        return node
      }
    }

    return undefined;
  }
}

var id: number = new Date().getTime();
export class IdGenerator{
  static NextId(): string{
    return (id++).toString();
  }

  static UpdateId(view: View){
    view.id = this.NextId()
    for (var inx = 0; inx < view.nodes.length; ++inx){
      var node = view.nodes[inx]
      node.id = this.NextId()
      if (node.type == 0 && node.view){
        this.UpdateId(node.view)
      }
    }
  }
}