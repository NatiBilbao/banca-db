export class CreateSavingGroupDto{
    group_name: string;
    creation_date: string; // Puedes usar 'string' para las fechas si prefieres manejarlas como cadenas.
    leader_id: number;
    secretary_id: number;
    treasurer_id: number;
}