export interface View{
  classNames?: string;
  style?: string;
  nodes: Node[];
  id: string;
}

export interface Node{
  type: number;
  src?: string;
  text?: string;
  view?: View;
  classNames?: string;
  style?: string;
  id: string;
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