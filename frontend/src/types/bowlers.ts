export type team = {
    teamId: number;
    teamName: string;
};

export type bowler = {
    bowlerId: number;
    bowlerFirstName: string;
    bowlerMiddleInit?: string;
    bowlerLastName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamId: number;
    team?: team;   
};
