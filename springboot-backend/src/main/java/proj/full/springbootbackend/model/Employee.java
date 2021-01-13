package proj.full.springbootbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "last_clocked_in")
	private String lastClockedIn;
	
	@Column(name = "last_clocked_out")
	private String lastClockedOut;
	
	@Column(name = "is_clocked_in")
	private boolean isClockedIn;
	
	public Employee() {
		
	}
	
	public Employee(long id, String firstName, String lastName, String emailId, String lastClockedIn, String lastClockedOut, boolean isClockedIn) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.lastClockedIn = lastClockedIn;
		this.lastClockedOut = lastClockedOut;
		this.isClockedIn = isClockedIn;
	}
	
	public boolean getIsClockedIn() {
		return isClockedIn;
	}
	

	public void setIsClockedIn(boolean isClockedIn) {
		this.isClockedIn = isClockedIn;
	}

	
	public String getLastClockedIn() {
		return lastClockedIn;
	}

	public void setClockedIn(String lastClockedIn) {
		this.lastClockedIn = lastClockedIn;
	}

	public String getLastClockedOut() {
		return lastClockedOut;
	}

	public void setClockedOut(String lastClockedOut) {
		this.lastClockedOut = lastClockedOut;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
}
