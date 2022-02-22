import { TreeItem, TreeItemCollapsibleState, TreeDataProvider, Uri, window } from "vscode";
import { join } from "path";
import website from "../website";

// const ITEM_ICON_MAP = new Map<string, string>([
//     ['one','one.svg'],
//     ['two','two.svg'],
//     ['three','three.svg']
// ]);

export class TreeItemNode extends TreeItem {
    constructor(
        public readonly label: string,
        public readonly collapsibleState: TreeItemCollapsibleState,
    ){
        super(label, collapsibleState);
    }

    command = {
        title: this.label,
        command: 'itemClick',
        tooltip: this.label,
        arguments: [
            this.label
        ]
    };
    iconPath= TreeItemNode.getIconUriForLabel(this.label);
    static getIconUriForLabel(label: string):Uri {
        const iconArr = this.getLabelIcon(label);
        return Uri.file(join(__filename,'..','..','src','assets','imgs', iconArr[0].icon+'')); // ..代表上一级目录
    }
    static getLabelIcon(label: string){
        return website.filter(item=>{
            return item.label === label;
        });
    }
}

export class TreeViewProvider implements TreeDataProvider <TreeItemNode> {
    onDidChangeTreeData?: import('vscode').Event<void | TreeItemNode | null | undefined> | undefined;
    getTreeItem(element: TreeItemNode): TreeItem | Thenable<TreeItem> {
        return element;
    }
    getChildren(element?: TreeItemNode | undefined, type?: string): import('vscode').ProviderResult<TreeItemNode[]> {
        // return website.map(
        //     item => new TreeItemNode(
        //         item.label as string,
        //         TreeItemCollapsibleState.None as TreeItemCollapsibleState,
        //     )
        // );
        let childs:any = [];
        website.map(item =>{
            if(type === item.type){
            childs.push(new TreeItemNode(
                item.label as string,
                TreeItemCollapsibleState.None as TreeItemCollapsibleState,
            ));}
        });
        return childs;
    }

    public static initTreeViewItem(){
        const treeViewProvider = new TreeViewProvider('read');
        window.registerTreeDataProvider('read', treeViewProvider);
    }

}