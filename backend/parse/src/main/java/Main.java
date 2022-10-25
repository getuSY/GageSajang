import anlz.LivingPopulationStore;
import anlz.StoreLivingPopulation;
import csv.Api;
import csv.Csv;
import object.CodeAndGU;
import object.LivingPopulation;

import java.util.List;

public class Main {
    public static void main(String[] args){

//        StoreLivingPopulation storeLivingPopulation = new StoreLivingPopulation();
//        storeLivingPopulation.getApi();

        LivingPopulationStore livingPopulationStore = new LivingPopulationStore();
        livingPopulationStore.combine();


    }
}
