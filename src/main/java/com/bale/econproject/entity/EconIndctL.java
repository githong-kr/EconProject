package com.bale.econproject.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "econ_indct_l")
@Data
@IdClass(EconIndctL.class)
public class EconIndctL implements Serializable {
    @Id
    String id;

    @Id
    String date;

    Double rate;

}
