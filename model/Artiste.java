package jpa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

@Entity
public class Artiste extends User {
    private String nationalite;


    @OneToOne
    private Concert concert;


    public Artiste() {}

    public Artiste(String nationalite) {
        this.nationalite = nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }

    public String getNationalite() {
        return this.nationalite;
    }
}
