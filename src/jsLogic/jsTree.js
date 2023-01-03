function FolderTree(){
    return {
        nodeName: '',
        nodePath: '',
        content : [],
        forEachContent : function(callback){
            this.content.forEach(callback);
        },
        setNodePath: function(prevPath = ''){
            if (!prevPath){
                this.nodePath = this.nodeName
            }
            else{
                this.nodePath = `${prevPath}/${this.nodePath}`
            }
        }
    }
}



export default FolderTree
