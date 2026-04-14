package jpa.model;

import jakarta.persistence.Entity;

@Entity
public class Gestionnaire extends User {

    private String permission;

    public Gestionnaire() {

    }

    public Gestionnaire(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return this.permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
}
