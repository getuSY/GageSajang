package mongodb;

import java.util.List;
import java.util.Set;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;


public class LivingToMongo {

    String MongoDB_IP = "127.0.0.1";
    int MongoDB_PORT = 27017;
    String DB_NAME = "SSAFY";

    //Connect to MongoDB
    MongoClient mongoClient = new MongoClient(new ServerAddress(MongoDB_IP, MongoDB_PORT));

}
