package jpa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

@Entity
public class Client extends User {

    private String compte_bancaire;
    
    @OneToOne
    private Ticket ticket;
    public Client() {
    }

    public Client(String compte_bancaire) {
        this.compte_bancaire = compte_bancaire;
    }

    public void setCompteBancaire(String compte_bancaire) {
        this.compte_bancaire = compte_bancaire;
    }

    public String getCompteBancaire() {
        return this.compte_bancaire;
    }

}
