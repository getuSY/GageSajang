package com.ssafy.e205.api.service;

import com.ssafy.e205.api.dto.*;
import com.ssafy.e205.db.entity.*;

import java.util.List;

public interface DetailService {

    DetailDto detailFindByName(String guName);

}
