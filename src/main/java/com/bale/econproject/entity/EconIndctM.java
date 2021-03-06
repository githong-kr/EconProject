package com.bale.econproject.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "econ_indct_m")
@Data
public class EconIndctM {
    @Id
    String id;

    String title;

    String description;
}

