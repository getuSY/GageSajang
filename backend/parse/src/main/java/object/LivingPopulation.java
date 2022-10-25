package object;

public class LivingPopulation {

    String trdarCode;
    String quCode;
    int total;
    int male;
    int female;
    int age10;
    int age20;
    int age30;
    int age40;
    int age50;
    int age60;
    int time1;
    int time2;
    int time3;
    int time4;
    int time5;
    int time6;
    int mon;
    int tue;
    int wed;
    int thu;
    int fri;
    int sat;
    int sun;
    String guName;

    @Override
    public String toString() {
        return "LivingPopulation{" +
                "trdarCode='" + trdarCode + '\'' +
                ", quCode='" + quCode + '\'' +
                ", total=" + total +
                ", male=" + male +
                ", female=" + female +
                ", age10=" + age10 +
                ", age20=" + age20 +
                ", age30=" + age30 +
                ", age40=" + age40 +
                ", age50=" + age50 +
                ", age60=" + age60 +
                ", time1=" + time1 +
                ", time2=" + time2 +
                ", time3=" + time3 +
                ", time4=" + time4 +
                ", time5=" + time5 +
                ", time6=" + time6 +
                ", mon=" + mon +
                ", tue=" + tue +
                ", wed=" + wed +
                ", thu=" + thu +
                ", fri=" + fri +
                ", sat=" + sat +
                ", sun=" + sun +
                ", guName='" + guName + '\'' +
                '}';
    }

    public LivingPopulation(String trdarCode, String quCode, int total, int male, int female, int age10, int age20, int age30, int age40, int age50, int age60, int time1, int time2, int time3, int time4, int time5, int time6, int mon, int tue, int wed, int thu, int fri, int sat, int sun) {
        this.trdarCode = trdarCode;
        this.quCode = quCode;
        this.total = total;
        this.male = male;
        this.female = female;
        this.age10 = age10;
        this.age20 = age20;
        this.age30 = age30;
        this.age40 = age40;
        this.age50 = age50;
        this.age60 = age60;
        this.time1 = time1;
        this.time2 = time2;
        this.time3 = time3;
        this.time4 = time4;
        this.time5 = time5;
        this.time6 = time6;
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thu = thu;
        this.fri = fri;
        this.sat = sat;
        this.sun = sun;
    }

    public LivingPopulation(){}

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

    public String getQuCode() {
        return quCode;
    }

    public void setQuCode(String quCode) {
        this.quCode = quCode;
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

    public int getTime1() {
        return time1;
    }

    public void setTime1(int time1) {
        this.time1 = time1;
    }

    public int getTime2() {
        return time2;
    }

    public void setTime2(int time2) {
        this.time2 = time2;
    }

    public int getTime3() {
        return time3;
    }

    public void setTime3(int time3) {
        this.time3 = time3;
    }

    public int getTime4() {
        return time4;
    }

    public void setTime4(int time4) {
        this.time4 = time4;
    }

    public int getTime5() {
        return time5;
    }

    public void setTime5(int time5) {
        this.time5 = time5;
    }

    public int getTime6() {
        return time6;
    }

    public void setTime6(int time6) {
        this.time6 = time6;
    }

    public int getMon() {
        return mon;
    }

    public void setMon(int mon) {
        this.mon = mon;
    }

    public int getTue() {
        return tue;
    }

    public void setTue(int tue) {
        this.tue = tue;
    }

    public int getWed() {
        return wed;
    }

    public void setWed(int wed) {
        this.wed = wed;
    }

    public int getThu() {
        return thu;
    }

    public void setThu(int thu) {
        this.thu = thu;
    }

    public int getFri() {
        return fri;
    }

    public void setFri(int fri) {
        this.fri = fri;
    }

    public int getSat() {
        return sat;
    }

    public void setSat(int sat) {
        this.sat = sat;
    }

    public int getSun() {
        return sun;
    }

    public void setSun(int sun) {
        this.sun = sun;
    }
}
