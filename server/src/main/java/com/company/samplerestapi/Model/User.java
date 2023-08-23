package com.company.samplerestapi.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private long phone;

    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;

    @Column(name = "pwd")
    private String pwd;
    @Column(name = "dob")
    private String dob;

    public User() {
    }

    public User(String firstName, String lastNameame, long phone, String email, String pwd, String dob) {
        this.firstName = firstName;
        this.lastName = lastNameame;
        this.email = email;
        this.pwd = pwd;
        this.dob = dob;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

}
