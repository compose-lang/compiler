enum OpCode {
    END = 0x0B,
    RETURN = 0x0F,
    LOCAL_GET = 0x20,
    LOCAL_SET = 0x21,
    LOCAL_TEE = 0x22,
    CONST_I32 = 0x41,
    CONST_I64 = 0x42,
}

export default OpCode;
