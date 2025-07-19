import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/feedback.dto';
export declare class FeedbackService {
    private prisma;
    constructor(prisma: PrismaService);
    createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<{
        success: boolean;
        message: string;
        data: CreateFeedbackDto;
    }>;
}
