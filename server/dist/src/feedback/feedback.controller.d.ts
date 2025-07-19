import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<{
        success: boolean;
        message: string;
        data: CreateFeedbackDto;
    }>;
}
