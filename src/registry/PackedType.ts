import binaryen from "binaryen";

enum PackedType {
    NotPacked = (binaryen["_BinaryenPackedTypeNotPacked" as keyof typeof binaryen] as () => PackedType)(),
    Int8 = (binaryen["_BinaryenPackedTypeInt8" as keyof typeof binaryen] as () => PackedType)(),
    Int16 = (binaryen["_BinaryenPackedTypeInt16" as keyof typeof binaryen] as () => PackedType)(),
}

export default PackedType;
