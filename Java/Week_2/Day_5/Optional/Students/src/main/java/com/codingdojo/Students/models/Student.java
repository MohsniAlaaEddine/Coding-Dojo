package com.codingdojo.Students.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="student")
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 5, max = 100, message = "Name is invalid")
	private String name;
	
	// This will not allow the createdAt column to be updated after creation
		@Column(updatable = false)
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date createdAt;
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date updatedAt;
		

 		@ManyToOne(fetch = FetchType.LAZY)
 	    @JoinColumn(name="dorm_id")
 	    private Dorm dorm;
 		
 		public Student() {}
 		
 		@PrePersist
		protected void onCreate() {
			this.createdAt = new Date();
		}

		@PreUpdate
		protected void onUpdate() {
			this.updatedAt = new Date();
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public Date getCreatedAt() {
			return createdAt;
		}

		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}

		public Date getUpdatedAt() {
			return updatedAt;
		}

		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}

		public Dorm getDorm() {
			return dorm;
		}

		public void setDorm(Dorm dorm) {
			this.dorm = dorm;
		}
		
		
}
