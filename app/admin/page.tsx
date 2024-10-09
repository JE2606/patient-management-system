import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
    const appointments = await getRecentAppointmentList();

    return (
        <main className="mx-auto flex max-w-7xl flex-col space-y-14">
            <header className="admin-header">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/assets/icons/logo-icon.svg"
                        height={32}
                        width={162}
                        alt="logo"
                        className="h-8 w-fit"
                    />
                </Link>

                <p className="text-16-semibold">Admin Dashboard</p>
            </header>

            <section className="admin-main">
                <div className="w-full space-y-4">
                    <h1 className="header">Welcome</h1>
                    <p className="text-dark-700">
                        Start the day with managing new appointments
                    </p>
                </div>

                <div className="admin-stat">
                    <StatCard
                        type="appointments"
                        count={appointments.scheduledCount}
                        label="Scheduled appointments"
                        icon={"/assets/icons/appointments.svg"}
                    />
                    <StatCard
                        type="pending"
                        count={appointments.pendingCount}
                        label="Pending appointments"
                        icon={"/assets/icons/pending.svg"}
                    />
                    <StatCard
                        type="cancelled"
                        count={appointments.cancelledCount}
                        label="Cancelled appointments"
                        icon={"/assets/icons/cancelled.svg"}
                    />
                </div>

                <DataTable columns={columns} data={appointments.documents} />
            </section>
        </main>
    );
};

export default AdminPage;