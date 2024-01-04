import type { NextApiRequest, NextApiResponse } from 'next'

interface UserData {
    name: string;
    profilePicture: string;
    billing: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserData>
) {
    if (req.method === 'GET') {
        // Return some mock user data
        res.status(200).json({
            name: 'John Doe',
            profilePicture: 'https://via.placeholder.com/150',
            billing: '$100.00'
        })
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}