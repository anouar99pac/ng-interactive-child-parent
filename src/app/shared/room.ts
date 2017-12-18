
export interface Room {
    id: string;
    surface: Float32Array;
    description?:string;
}

// Export  Interface of type of event to submit to the Parent
export interface SURFACE_TYPE {
    surface: Number;
}