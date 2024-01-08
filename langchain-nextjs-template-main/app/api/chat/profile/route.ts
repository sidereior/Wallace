// Import the necessary types from 'next'
import type { NextApiRequest, NextApiResponse } from 'next'

// Define a type for the user data
interface UserData {
    name: string;
    profilePicture: string;
    billing: string;
}

// The API route handler function
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserData>
) {
    // Check if the request method is GET
    if (req.method === 'GET') {
        // Return some mock user data
        res.status(200).json({
            name: 'John Doe',
            profilePicture: 'https://via.placeholder.com/150',
            billing: '$0.00'
        });
    } else {
        // For any other HTTP method, respond with method not allowed
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
