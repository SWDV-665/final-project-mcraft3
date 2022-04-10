import { Injectable } from '@angular/core';

/*
  Generated class for the ProposalsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProposalsServiceProvider {

  // Array of proposals
  proposals = [
    {
      ProjectID: 11032,
      LastName: "Wilson",
      FirstName: "Charlie",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "anyone@anywhere.com",
      Department: "A",
      DivBranchCode: "A2",
      Category: "MS",
      Subject: "New Audio Visual System for Large Conference Room",
      Description: "Need projector, displays, speakers, etc.",
      SafetyIssue: "no",
      SecurityIssue: "no",
      Submitted: "2021-04-28T22:57:58+00:00",
      userImg: 'assets/imgs/robotics.png'
    },
    {
      ProjectID:5281,
      LastName: "Kimble",
      FirstName: "Bill",
      Email: "test@test.com",
      Phone:"123-456-7890",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "B",
      DivBranchCode: "B2",
      Category: "CSC",
      Subject: "Firmware Lab for UAVs and unmanned systems",
      Description: "For pizza delivery uav project.",
      SafetyIssue: "no",
      SecurityIssue: "no",
      Submitted: "2021-04-28T23:49:26+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 20102,
      LastName: "Banks",
      FirstName: "Bobby",
      Email: "test@test.com",
      Phone: "123-456-7890",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "C",
      DivBranchCode: "C1",
      Category: "MS",
      Subject: "Water Supply is weak and no hot water",
      Description: "Need hot water.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-29T00:08:40+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 6558,
      LastName: "Bower",
      FirstName: "Brad",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "anyone@test.com",
      Department: "C",
      DivBranchCode: "C3",
      Category: "CE",
      Subject: "Need CAD Software",
      Description: "CAD software is obsolete.",
      SafetyIssue: null,
      SecurityIssue: "yes",
      Submitted: "2021-04-29T00:10:47+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 43697,
      LastName: "Brown",
      FirstName: "Tim",
      Email: "anyone@anywhere.com",
      Phone: "123-456-7890",
      AltPOCEmail: "anyone@anywhere.com",
      Department: "C",
      DivBranchCode: "A3",
      Category: "MF",
      Subject: "HVAC Heat is stuck on",
      Description: "Building is at 88F. Heat is stuck on. Controls not working.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-29T00:12:28+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 85767,
      LastName: "America",
      FirstName: "Captain",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "B",
      DivBranchCode: "B1",
      Category: "CSC",
      Subject: "Establish vibranium lab",
      Description: "Need lab to recycle, re-purpose, and manufacture new vibranium widgets for Captain America.",
      SafetyIssue: "yes",
      SecurityIssue: "yes",
      Submitted: "2021-04-29T00:17:05+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 59362,
      LastName: "Brown",
      FirstName: "Charlie",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "C",
      DivBranchCode: "C1",
      Category: "CE","Subject":"3D Metal Printer",
      Description: "Need tech refresh of metal 3D Printer.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:32:35+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 59628,
      LastName: "Hood",
      FirstName: "Robin",
      Email: "test@test.com",
      Phone: "123-456-7890",
      AltPOCEmail: "anyone@test.com",
      Department: "B",
      DivBranchCode: "B1",
      Category: "MS",
      Subject: "Broken Bow",
      Description: "Need new bow.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:35:29+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 96238,
      LastName: "Stalone",
      FirstName: "Sylvester",
      Email: "anyone@anywhere.com",
      Phone: "555-555-5555",
      AltPOCEmail: "anyone@anywhere.com",
      Department: "C",
      DivBranchCode: "C1",
      Category: "MF",
      Subject: "Resharpen Rambo knife",
      Description: "My blade is dull, please resharpen.",
      SafetyIssue: "yes",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:37:04+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID:50445,
      LastName:"Eastwood",
      FirstName:"Clint",
      Email:"anyone@anywhere.com",
      Phone:"123-456-7890",
      AltPOCEmail:"anyone@anywhere.com",
      Department:"B",
      DivBranchCode:"B1",
      Category:"MS",
      Subject:"need a new handle for the 44 magnum",
      Description:"Please use elk horn or ironwood for the handle.",
      SafetyIssue:"yes",
      SecurityIssue:"no",
      Submitted:"2021-04-30T00:38:50+00:00",
      userImg: 'assets/imgs/image.svg'
    },
    {
      ProjectID: 23219,
      LastName: "Man",
      FirstName: "Super",
      Email: "anyone@anywhere.com",
      Phone: "123-456-7890",
      AltPOCEmail: "somebody@anywhere.com",
      Department: "B",
      DivBranchCode: "C1",
      Category: "MS",
      Subject: "Cape is dirty",
      Description: "Please dry clean the cape and attach a new S emblem to replace the worn out emblem.",
      SafetyIssue: "no",
      SecurityIssue: "no",
      Submitted: "2021-04-30T00:40:41+00:00",
      userImg: 'assets/imgs/image.svg'
    }
  ]

  constructor() {
    console.log('Hello ProposalsServiceProvider Provider');
  }

  getProposals() {
    return this.proposals;
  }

  removeProposal(index) {
    this.proposals.splice(index, 1);
  }

  addProposal(proposal) {
    this.proposals.push(proposal);
  }

  editProposal(proposal, index) {
    this.proposals[index] = proposal;
  }

}
