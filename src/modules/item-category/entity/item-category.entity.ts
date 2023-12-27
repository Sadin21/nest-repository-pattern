import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'item_categories' })
export class ItemCategoryEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', nullable: true })
    description: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
    deletedAt: Date;
}
