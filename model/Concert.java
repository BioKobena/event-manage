package jpa.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Concert implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private String lieu;
    private String date;
    private String genre_musicale;
    private String description;
    private int popularite;
    private int nombre_place;

    @OneToMany
    private Collection<Artiste> artiste;

    @OneToMany(mappedBy = "concert", cascade = CascadeType.PERSIST)
    private List<Ticket> ticket;

    public Concert() {
        this.ticket = new ArrayList<>();
    }

    public Concert(String lieu, String date, String genre_musicale, String description, int popularite,
            int nombre_place, Ticket ticket) {
        this.ticket = new ArrayList<Ticket>();
        this.lieu = lieu;
        this.date = date;
        this.genre_musicale = genre_musicale;
        this.description = description;
        this.popularite = popularite;
        this.nombre_place = nombre_place;
        this.ticket = new ArrayList<Ticket>();

    }

    public int getId() {
        return this.id;
    }

    public List<Ticket> getTicket() {
        return this.ticket;
    }

    public void setTicket(List<Ticket> ticket) {
        this.ticket = new ArrayList<Ticket>();
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public String getLieu() {
        return this.lieu;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDate() {
        return this.date;
    }

    public void setGenreMusicale(String genre_musicale) {
        this.genre_musicale = genre_musicale;
    }

    public String getGenreMusicale() {
        return this.genre_musicale;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }

    public void setPopularite(int popularite) {
        this.popularite = popularite;
    }

    public int getPopularite() {
        return this.popularite;
    }

    public void setNombrePlace(int nombre_place) {
        this.nombre_place = nombre_place;
    }

    public int getNombrePlace() {
        return this.nombre_place;
    }

}
