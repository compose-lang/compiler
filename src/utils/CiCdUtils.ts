export default abstract class CiCdUtils {

    static isCiCd() {
        return process && !!process.env.CI;
    }
}
