class SpaceBox {
    id: number;
    name: string;
    description: string;
    importance: number;
    parent: SpaceBox;
    children: SpaceBox[];
}

class SpaceBoxManager {
    rootSpaceBox: SpaceBox;
    listSpaceBoxes: SpaceBox[];

    constructor() {}

    addSpaceBox() {
        
    }
}