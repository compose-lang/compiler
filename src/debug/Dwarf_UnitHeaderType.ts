/* DWARF Unit Header Types.  */
enum Dwarf_UnitHeaderType {
    DW_UT_compile = 0x01,
    DW_UT_type = 0x02,
    DW_UT_partial = 0x03,
    DW_UT_skeleton = 0x04,
    DW_UT_split_compile = 0x05,
    DW_UT_split_type = 0x06,

    DW_UT_lo_user = 0x80,
    DW_UT_hi_user = 0xff
}

export default Dwarf_UnitHeaderType
