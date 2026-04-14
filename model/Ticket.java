package jpa.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Ticket implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private int prix;

    @OneToOne
    private Concert concert;

    @OneToOne
    private Client client;

    public Ticket() {
    }

    public Ticket(int prix, Concert concert) {
        this.prix = prix;
        this.concert = concert;
    }

    public Concert getConcert() {
        return this.concert;
    }

    public void setConcert(Concert concert) {
        this.concert = concert;
    }

    public int getId() {
        return this.id;
    }

    public void setPrix(int prix) {
        this.prix = prix;
    }

    public int getPrix() {
        return this.prix;
    }
}
