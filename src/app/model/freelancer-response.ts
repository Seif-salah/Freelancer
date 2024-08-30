export interface FreelanceresResponce {
    status:string,
    data:[
        {
            _id: string;
            id: number;
            firstName: string;
            lastName: string;
            password: string;
            quote: string;
            rating: number;
            profileDescription:string
        }
    ]
}