import { ExamComponentKey, ExamComponentTitle, ExamCorrectionTemplate, LevelKeys } from '../models/english.models';

export const correctionA2: ExamCorrectionTemplate = {
    id: LevelKeys.A2,
    correctionTemplate: [[44, 140, 'Grade A (Level B1)'], [70, 133, 'Grade B (Pass)'], [85, 120, 'Grade C (Pass)'], [90, 100, 'Level A1 (Failed)']],
    components: [
        {
            id: ExamComponentKey.READING,
            title: ExamComponentTitle.READING,
            correctionTemplate: [[28, 140, 'Level B1'], [20, 120, 'Level A2'], [13, 100, 'Level A1'], [7, 82, '-']]
        },
        {
            id: ExamComponentKey.WRITING,
            title: ExamComponentTitle.WRITING,
            correctionTemplate: [[26, 140, 'Level B1'], [18, 120, 'Level A2'], [12, 100, 'Level A1'], [8, 82, '-']]
        },
        {
            id: ExamComponentKey.LISTENING,
            title: ExamComponentTitle.LISTENING,
            correctionTemplate: [[23, 140, 'Level B1'], [17, 120, 'Level A2'], [11, 100, 'Level A1'], [6, 82, '-']]
        },
        {
            id: ExamComponentKey.SPEAKING,
            title: ExamComponentTitle.SPEAKING,
            correctionTemplate: [[41, 140, 'Level B1'], [27, 120, 'Level A2'], [18, 100, 'Level A1'], [10, 82, '-']]
        }
    ]
};
