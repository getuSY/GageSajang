package object;

public class ResidentPopulation {

    String trdarCode;
    int total;
    int male;
    int female;
    int age10;
    int age20;
    int age30;
    int age40;
    int age50;
    int age60;
    String guName;
    int house;
    int apt;
    int nonApt;

    @Override
    public String toString() {
        return "ResidentPopulation{" +
                "trdarCode='" + trdarCode + '\'' +
                ", total=" + total +
                ", male=" + male +
                ", female=" + female +
                ", age10=" + age10 +
                ", age20=" + age20 +
                ", age30=" + age30 +
                ", age40=" + age40 +
                ", age50=" + age50 +
                ", age60=" + age60 +
                ", guName='" + guName + '\'' +
                ", house=" + house +
                ", apt=" + apt +
                ", nonApt=" + nonApt +
                '}';
    }

    public ResidentPopulation(String trdarCode, String quCode, int total, int male, int female, int age10, int age20, int age30, int age40, int age50, int age60, int house, int apt, int nonApt) {
        this.trdarCode = trdarCode;
        this.total = total;
        this.male = male;
        this.female = female;
        this.age10 = age10;
        this.age20 = age20;
        this.age30 = age30;
        this.age40 = age40;
        this.age50 = age50;
        this.age60 = age60;
        this.house = house;
        this.apt = apt;
        this.nonApt = nonApt;
    }

    public ResidentPopulation(){}

    public String getGuName() {
        return guName;
    }

    public void setGuName(String guName) {
        this.guName = guName;
    }

    public String getTrdarCode() {
        return trdarCode;
    }

    public void setTrdarCode(String trdarCode) {
        this.trdarCode = trdarCode;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getMale() {
        return male;
    }

    public void setMale(int male) {
        this.male = male;
    }

    public int getFemale() {
        return female;
    }

    public int getHouse() {
        return house;
    }

    public void setHouse(int house) {
        this.house = house;
    }

    public int getApt() {
        return apt;
    }

    public void setApt(int apt) {
        this.apt = apt;
    }

    public int getNonApt() {
        return nonApt;
    }

    public void setNonApt(int nonApt) {
        this.nonApt = nonApt;
    }

    public void setFemale(int female) {
        this.female = female;
    }

    public int getAge10() {
        return age10;
    }

    public void setAge10(int age10) {
        this.age10 = age10;
    }

    public int getAge20() {
        return age20;
    }

    public void setAge20(int age20) {
        this.age20 = age20;
    }

    public int getAge30() {
        return age30;
    }

    public void setAge30(int age30) {
        this.age30 = age30;
    }

    public int getAge40() {
        return age40;
    }

    public void setAge40(int age40) {
        this.age40 = age40;
    }

    public int getAge50() {
        return age50;
    }

    public void setAge50(int age50) {
        this.age50 = age50;
    }

    public int getAge60() {
        return age60;
    }

    public void setAge60(int age60) {
        this.age60 = age60;
    }

}
