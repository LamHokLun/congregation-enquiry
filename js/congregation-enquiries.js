var select = document.getElementsByTagName("select");
var option = document.getElementsByTagName("option");
var ansV = document.getElementById("ansV");
var ansI = document.getElementById("ansI");

/*--------------------Style------------------------*/
ansV.style.border = "1.5px #3B3E7A solid";
ansV.style.position = "relative";
ansV.style.left = "20vw";
ansV.style.width = "75vw";
/*ansV.style.height = "20vw";*/
ansV.style.display = "inline-flex";
ansV.style.justifyContent = "left";
ansV.style.alignItems = "top";
ansV.style.color = "#3B3E7A";
ansV.style.padding = "10px";

ansI.style.border = "1.5px #F05A24 solid";
ansI.style.position = "relative";
ansI.style.left = "20vw";
ansI.style.width = "75vw";
/*ansI.style.height = "20vw";*/
ansI.style.display = "inline-flex";
ansI.style.justifyContent = "left";
ansI.style.alignItems = "top";
ansI.style.color = "#F05A24";
ansI.style.padding = "10px";

/*--------------------Function------------------------*/

function mySelectV(){
if (select[0].value == "Guest info not confirmed") {
ansV.innerText = `Thank you for your enquiry.

We understand that you may not have finalized your guest arrangements yet. As the registration system requires all mandatory fields to be completed before submission, you may enter temporary guest details for the time being in order to proceed.

Please note that you will be able to update your guest information at any time before the registration deadline. We kindly ask that you ensure all details are accurate and finalized prior to closure, as the information will be verified during onsite registration on the event day.

We encourage you to update your details as soon as your guest has been confirmed to help ensure a smooth check-in process.`;
}

else if (select[0].value == "Date of Congregation (before announcement on Faculty website / invitation email)") {
ansV.innerText = `Regarding your inquiry, the Faculty of Engineering’s Summer Congregation is currently planned for late July. While the exact schedule has yet to be finalised, the Registry typically announces the Congregation details to all final-year students via email in late March. Please stay tuned for updates.

For the latest announcements, you may wish to bookmark the following websites:
•	HKU Congregation Page
•	Faculty of Engineering Congregation News

The In-person Congregation of HKU Engineering is scheduled for late July 2026.

Should you have any further questions, please feel free to contact us.`;
}

else if (select[0].value == "Certificate issue / will certificate be collected/ distributed during Congregation?") {
ansV.innerText = `Thanks for reaching out. Please also note that graduation certificates will not be distributed during the ceremony. The issuance of certificates is administered by the Academic Services Office (ASO). Arrangements for certificate collection for the Class of 2025 graduands will be announced in due course on the “Certificate” page of the HKU Congregation website: https://www4.hku.hk/congreg/certificate. For details of collection methods, please refer to their website: https://ase.hku.hk/asoffice/. 

We fully understand your situation, as stipulated in the University Statutes, which form part of Hong Kong Law, graduation certificates can only be issued to graduands after their degrees have been formally conferred at a Congregation. Therefore, we regret to inform you that the graduation certificate is unable to receive earlier than a Congregation.

Should you have any questions, please contact ASO directly at asoffice@hku.hk.

Best regards,
Faculty of Engineering`;}

else if (select[0].value == "Is rental of academic dress needed?") {
ansV.innerText = `Thank you for your enquiry.
 
Kindly note that graduands or graduates without academic dress will not be presented on stage for degree conferral or included in group photos on stage after the ceremony. 
 
If you decide not to rent the academic gown, please inform us. In that case, we will arrange for you to receive three guest tickets, as only graduands in academic dress may be seated in the graduand zone and participate in the stage presentation and group photo taking. Renting the gown for personal photos is entirely optional.`;}

else if (select[0].value == "Change later registration for In-person Congregation") {
ansV.innerText = `Thanks for reaching out. 

All registered graduands’ information has already been processed by the relevant University units. Please note that requests for registration for the alternative Congregation or any changes cannot be accommodated.

Hope to have your understanding.

Best regards,
Faculty of Engineering`;}


else if (select[0].value == "Zoom / Webinar Link Request") {
ansV.innerText = `Thanks for reaching out.

You have registered the virtual Congregation successfully. Please be patient for the Zoom/Webinar link as they will be sent to the graduand's registered personal email one week before the event.

Best regards,
Faculty of Engineering`;}
	
	
else if (select[0].value == "Absentia") {
ansV.innerText = `Thanks for reaching out.

Graduands who are not able to attend either the In-person Congregation or the virtual Congregation will have their degrees conferred in absentia at the in-person ceremony. Kindly inform you that your graduation certificate will be available after the in-person Congregation ceremony.

Best regards,
Faculty of Engineering`;}
	

else if (select[0].value == "Availability of the Graduation Certificate") {
ansV.innerText = `Thanks for reaching out.

The graduation certificate is normally available after the congregation. You are advised to check HKU Portal regularly and refer to the University’s certificate collection webpage for the latest information: https://www4.hku.hk/congreg/certificate

Best regards,
Faculty of Engineering`;}
	

else if (select[0].value == "Eligibility Check") {
ansV.innerText = `Thank you for your email.

Regarding your eligibility for graduation, please kindly consult the UG/TPG programme administrator directly. They have been copied in this email.`;}

else if (select[0].value == "Fulfilled graduation requirement – early collection of graduation certificate") {
ansV.innerText = `Thank you for your enquiry.

According to our records, you have fulfilled the graduation requirements. You will be invited to select between the virtual Summer Congregation, scheduled for early June 2026, and the in-person Summer Congregation, scheduled for late July 2026.

Please stay tuned for the invitation email. The graduation date will be the date of your degree conferral at the Congregation you attend.

Students who have a genuine need for earlier issuance of graduation certificate for employment or further studies are advised to choose the virtual session.`;}

else if (select[0].value == "Request for early issuance of certificate for employment/ further study") {
ansV.innerText = `Thank you for reaching out. We fully understand the urgency of your situation. Unfortunately, according to the University’s policy, graduation certificates are issued only after degrees have been formally conferred during the official Congregation ceremony.  After checking with the University on your case, we are afraid that we are unable to expedite this process.
 
We recommended you discussing with your prospective employer the possibility of accepting alternative forms of confirmation of your graduation status in the interim. This may include a letter from our office confirming the completion of your degree requirements.

Besides, the Congregation invitation email from the Faculty sent on June xx, should be useful for your visa application.
 
For documents such as a Testimonial or Certificate of Graduation (CoG), certifies that a student has successfully completed the requirements for the conferment of a degree at the Congregation Ceremony before the issuance of the graduation certificate can be applied through Academic Services Office website: https://ase.hku.hk/asoffice/. You may also contact Academic Services Office directly at asoffice@hku.hk.
 
Should further assistance from the Faculty, please do not hesitate to contact us.`;}

else if (select[0].value == "Supporting to Apply for VISA to attend Ceremony") {
ansV.innerText = `Thank you for reaching out to the Faculty.

Graduands are advised to check the latest entry requirements for travelling to Hong Kong if they plan to attend the Congregation ceremony.

Graduands who are eligible to join the 217th Congregation, should receive an email notification from the Faculty sent on June Xx, 2026, this invitation email may be useful for your visa application. 

For other supporting documents required for visa applications e.g. Testimonial or Certificate of Graduation (CoG) - please refer to website of Academic Services Office for details: https://ase.hku.hk/asoffice/.

Thank you.`;}

else if (select[0].value == "Late Registration is not Acceptable") {
	ansV.innerText = `We fully understand your situation, yet the late registration for the virtual Congregation is not accepted.

	Furthermore, as stipulated in the University Statutes, which form part of Hong Kong Law, graduation certificates can only be issued to graduands after their degrees have been formally conferred at the in-person Congregation. Therefore, we regret to inform you that the graduation certificate is unable to receive earlier than a Congregation.`
		 }
	
else if (select[0].value == "Enquiry on the Completion date of the degree") {
ansV.innerText = `Graduands are assigned to the Congregation nearest to the completion date of their studies for the conferral of degrees.

Kindly note that the cut-off date for 218th Congregation was before October 20, 2026. As your studies were completed after this date, we would like to inform you that your degree will be conferred at the next Congregation in the following year.

Should you have any equiries, do not hesitate to contact us.

Best regards,
Faculty of Engineering`}

}

select[0].addEventListener("change", mySelectV);

/*----------------------------------Break-------------------------------------*/

function mySelectI(){
if (select[1].value == "Not receiving the Congregation invitation email") {
ansI.innerText = `Please note that the attached email should have sent to you on xxx evening, inviting you to register for the 21xth Congregation, Faculty of Engineering.

For details of the registration, please refer to that email. Attached, please find the email for your reference.

Should you have any questions, please do not hesitate to let us know.

Thank you.

Best regards,
Faculty of Engineering`;
}

else if (select[1].value == "Cannot attend Congregation in-person") {
ansI.innerText = `If you are unable to attend the Congregation in person, your degree will be conferred in absentia during your assigned session. The arrangements for certificate collection will be the same as for those attending the ceremony in person. 

For details of certificate collection, please refer to the HKU Congregation website: https://www4.hku.hk/congreg/certificate. 

For related enquiries, please contact the Academic Services Office at asoffice@hku.hk.`;}

else if (select[1].value == "Certificate issue / will certificate be collected/ distributed during Congregation?") {
ansI.innerText = `Please also note that graduation certificates will not be distributed during the ceremony. The issuance of certificates is administered by the Academic Services Office (ASO). Arrangements for certificate collection for the Class of 2025 graduands will be announced in due course on the “Certificate” page of the HKU Congregation website: https://www4.hku.hk/congreg/certificate. For details of collection methods, please refer to their website: https://ase.hku.hk/asoffice/. 

Should you have any questions, please contact ASO directly at asoffice@hku.hk.`;}

else if (select[1].value == "Tickets email for late registration") {
ansI.innerText = `Thank you for your email. 

Confirmation emails, including admission QR codes for all graduands who registered late, will be issued by the xxx.`;}
	
	
else if (select[1].value == "The age of guests under 6 years-old") {
ansI.innerText = `Thank you for your email and for registering for the 218th Congregation.

Regarding your enquiry about bringing a 3-year-old child to the ceremony, please note the following arrangements:
•	Each graduate may register a maximum of two guests for the main ceremony venue.
•	Due to the formal nature of the event, children under the age of six are not permitted to enter the Grade Hall.
•	However, your sister and her 3-year-old daughter are welcome to watch the ceremony together at the livestreaming venue near the Grade Hall.

We hope this arrangement will allow your family to share the occasion. If you need to adjust your registered guest list, please make the changes in the system before the registration deadline.
Thank you for your understanding.

Best regards,
Faculty of Engineering`;}
	

else if (select[1].value == "Session Announcement") {
ansI.innerText = `Thanks for reaching out.

The Winter Congregation (Graduation Ceremony) is scheduled for 3 December (Thursday) and 4 December (Friday). The eligible graduands will be assigned to one of the sessions within December 3 and 4 according to their programme, the exact date and time of the sessions will be announced in mid-November. Stay tuned to the Congregation website for the updated information.
https://engg.hku.hk/Congregation/News 

Should you have any enquiries, do not hesitate to contact us.`;}
	


else if (select[1].value == "Could not login") {
ansI.innerText = `	Thank you for your email.   

Eligible graduands may register at https://register.engg.hku.hk/congregation by logging in with your UID and using your date of birth (YYYYMMDD) as password. Please ensure that all information provided in the registration form is accurate, as it will be used for verification purposes. No modifications will be accepted once the registration period has closed.

Should you have any further questions, please let us know. Thank you.

Best regards,
Faculty of Engineering`;}


else if (select[1].value == "Change later registration for Virtual Congregation") {
ansI.innerText = `The Virtual Congregation is scheduled for next Tuesday, June 9, 2026. All registered graduands’ information has already been processed by the relevant University units. Please note that requests for registration for the Virtual Congregation cannot be accommodated.

If you cannot attend the Congregation in person, you will have your degree conferred in absentia at your assigned in-person session. The arrangements for certificate collection will be the same as for those attending the in-person ceremony. Please refer to the HKU Congregation website for details: https://www4.hku.hk/congreg/certificate. 

Hope to have your understanding.`;}

else if (select[1].value == "Additional Guest tickets") {
ansI.innerText = `Due to the high volume of registrations and the limited seating capacity of the Grand Hall, we regret to inform you that we are unable to offer additional guest ticket to you at this time.  We will review your request after the registration period is closed.`;}


else if (select[1].value == "Late Registration Request after the system is closed") {
ansI.innerText = `Thank you for your email.

We have checked our records and can confirm that there was no registration submitted under your UID before the registration deadline on November 1, 2026.

If you would like to request late registration for the 218th Congregation, we can review your case and seek special approval on an exceptional basis. We will get back to you by email once the approval process has been completed.

In the meantime, please stay tuned to email communications from enggcomm@hku.hk for updates regarding your request.`;}

else if (select[1].value == "Late registration to In-person Congregation [ONLY before xxx 12:00 noon]") {
ansI.innerText = `We acknowledge receipt of your late registration request for the 217th In-person Congregation, Faculty of Engineering. We are pleased to inform you that special approval has been granted. 

Please complete your registration details within 24 hours of receiving this email. Kindly ensure you double-check that all information entered is correct before submitting the form, as no edits or updates can be made after submission.

LATE registration link for In-person Congregation: https://web.engg.hku.hk/forms/congregation/online_late.asp.

If you cannot attend the Congregation in person, you will have your degree conferred in absentia at your assigned in-person session. The arrangements for certificate collection will be the same as for those attending the in-person ceremony. Please refer to the HKU Congregation website for details: https://www4.hku.hk/congreg/certificate.
Should you have any questions or encounter any issues during registration, please email: enggfac@hku.hk.`;}

else if (select[1].value == "Late registration request [After xxx 17:59]") {
ansI.innerText = `Please note that late registration for the In-person 215th Congregation is now closed.

If you wish to walk in to join the In-person Congregation, please be aware:
•	Dress Code: Formal attire and full academic dress are mandatory.
•	Graduands without proper formal attire and/or full academic dress will NOT be permitted to enter the Hall or be presented on stage.

On the day Congregation, please arrive at the Graduands RSVP Counters, located at the foyer of the Grand Hall, 1 hour before your assigned session. Our staff and crew will assist you only if you meet the dress code requirements.

Before attending, please review the House Rules for joining the In-person Congregation: [LINK]

Best regards,
Faculty of Engineering`;}

else if (select[1].value == "Change registered guest information") {
ansI.innerText = `To complete the guest change update, please provide the latest details for both guests in English per below:

Guest 1
•	Full name (in English):
•	Contact phone number (Country Code + Phone Number):
Guest 2
•	Full name (in English):
•	Contact phone number (Country Code + Phone Number):

Should you have any questions, please feel free to contact us.

Best regards,
Faculty of Engineering`;}

else if (select[1].value == "Request for additional guests") {
ansI.innerText = `Reply before Seat Allocation (XXX)
Thank you for your email.

As the registration period has been closed for some time, we regret to inform you that we are unable to accommodate your request for a second guest ticket. We appreciate your understanding in this matter.

After Seat Allocation – approve only for graduands in XXX
We have received your request to invite additional guests to the 217th In-person Congregation, Faculty of Engineering.

We are pleased to accommodate guests for live-stream viewing at venues located near the Grand Hall now.

To complete the additional guest registration, please provide the guest details in English per below:

Guest 1
•	Full name (in English):
•	Contact phone number (Country Code + Phone Number):
Guest 2
•	Full name (in English):
•	Contact phone number (Country Code + Phone Number):

Should you have any questions, please feel free to contact us.`;}

	
else if (select[1].value == "High demand and the limited seating capacity of the Grand Hall") {
ansI.innerText = `Thank you for your email.
 
Due to the very high demand and the limited seating capacity of the Grand Hall, we regret that we are unable to provide any extra seats in the Grand Hall for your guests at this time. 

Meanwhile, we are available to offer your guest a ticket to the Live Streaming Room near the Grand Hall, where the ceremony will be broadcast live. However, the seats are available on “First come, first serve” principle. Therefore, we strongly recommend to arrive earlier and check with the Special Case Counter. 
 
Best regards,
Faculty of Engineering`;}
	

else if (select[1].value == "Clarification the LiveStreaming Room") {
ansI.innerText = `Thanks for reaching out.

Yes, your understanding is correct. Your previously registered guests are guaranteed seats in the Grand Hall. Any additional guests may attend the Live Streaming Room, subject to seat availability on a first-come, first-served basis, and should check in at the Special Case Counter upon arrival as advised.

Best regards,
Faculty of Engineering`;}
	
	
else if (select[1].value == "Request for Official Invitation letter from Faculty for Visa Application") {
ansI.innerText = `Thank you for your email regarding an official invitation letter for the upcoming Congregation.
 
Please note that the Faculty can arrange to issue an invitation letter in English (in PDF format) confirming your eligibility to bring up to two guests to the in-person Congregation. In line with our standard practice, we are unable to list the names of individual guests in the letter. The content of the letter will be essentially the same as the official email invitation sent to graduands, but presented in PDF format and addressed to you.
 
We also recommend that graduands use the original email invitation from the Dean of Engineering, sent on October 2, 2025, as a supporting document.
 
If you would like to receive this personalised invitation in PDF format, please let us know.
 
Thank you for your understanding.
 
Best regards,
Faculty of Engineering`;}

else if (select[1].value == "What’s the assigned session?") {
ansI.innerText = `Please note that graduands will be arranged to join the Congregation session according to the school/ department of their programme.

Please note that the Congregation schedule has been updated on Faculty Congregation website: https://engg.hku.hk/Congregation/News. 

A confirmation email with the event admission QR codes for both graduands and guests will be sent to those successfully registered and eligible to graduate by mid-November. Each graduand will be allocated a seat number, which will be indicated on the admission ticket.`;}

else if (select[1].value == "Request Extra tickets (S1 – S3 only)") {
ansI.innerText = `We have received your request to invite an additional guest to the 215th In-person Congregation, Faculty of Engineering. We are pleased to arrange one extra guest ticket for livestreaming at venues located near the Grand Hall.

To complete the registration for your guest, please provide the following details in English:

Guest 
•	Full name (in English):
•	Contact phone number (Country Code + Phone Number):

Upon receipt of the above information, the Faculty Office will issue an email to acknowledge and approve the request of the additional guest. Please ask your guest to present the approval email onsite (either with mobile device or a printed copy) at the Livestreaming counter for registration purpose and collect the ticket.`;}

else if (select[1].value == "Didn’t receive email from us") {
ansI.innerText = `Thank you for reaching out to us.

It is confirmed that your email "XXXXX" is included in our mailing list. Invitation and reminder emails regarding registration for the 215th Congregation (Virtual and In-person sessions) were sent, via university network, to all eligible graduands on 2 October and 13 October respectively. You may refer to the attached document for detailed information.

Please be advised that all degrees have been conferred. Graduation certificates are now available for collection at the Academic Services Office. Further details regarding collection procedures can be found at: https://www4.hku.hk/congreg/certificate.

Should you require any additional assistance, please do not hesitate to contact us. Thank you.`;}


else if (select[1].value == "Wheelchair Case") {
ansI.innerText = `We are pleased to confirm that wheelchair users are welcome at the Congregation. For your guest using an electric wheelchair, seating will be arranged in the balcony zone, which is accessible without taking the lift. On the event day, our staff at the reception will be ready to assist and guide you to the designated area upon your arrival.
 
If you have any further questions or require additional assistance, please do not hesitate to contact us in advance.

Best regards,
Faculty of Engineering`;}

}
document.write(screen.width + ", " + screen.height);
select[1].addEventListener("change", mySelectI);
