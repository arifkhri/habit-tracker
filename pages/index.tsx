import Table from '../components/Table';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const columns = [{
    title: 'Catatan',
    field: 'note',
  }, {
    title: 'Goal',
    field: 'goal',
  }, {
    title: 'Tercapai',
    field: 'achieved',
  }, {
    title: '',
    field: 'id',
    render: (_: any, record: any) => {
      return <>{record.id}</>;
    }
  }];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Habit Tracker
        </h1>

        <div className="row">
          {/* <div className="col">

          </div>

          <div className="col">

          </div> */}
        </div>

        <div className="content">
          <Table data={[]} columns={columns} />
        </div>
      </main>
    </div>
  );
}
